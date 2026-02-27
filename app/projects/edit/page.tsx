import { Suspense } from 'react';
import { status } from '../_lib/enums';
import StyledLink from '@/app/_components/styledlink';
import CardRow from '../_components/cardrow';
import CardRowSkeleton from '../_components/cardrowskeleton';
import { RefreshButton, LoginButton, LogoutButton } from '../_components/buttons';
import { getSession } from "../_lib/sessionhandler"

export default async function Page() {
    const session = await getSession();

    if (!session) {
        return (
            <LoginButton />
        )
    } else if (session.user.email === (process.env.AUTHORIZED_USER as string)) {
        return (
            <div>
                <div className="flex justify-center">
                    <h1 className="text-3xl">
                        Projects
                    </h1>
                </div>
                <div className="flex justify-center">
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className="flex">
                            <h2 className="text-2xl">Current</h2>
                        </div>
                        <Suspense fallback={<CardRowSkeleton />}>
                            <CardRow status={status.Current}></CardRow>
                        </Suspense>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <h2 className="text-2xl">Past</h2>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Suspense fallback={<CardRowSkeleton />}>
                                <CardRow status={status.Past}></CardRow>
                            </Suspense>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <h2 className="text-2xl">Future</h2>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Suspense fallback={<CardRowSkeleton />}>
                                <CardRow status={status.Future}></CardRow>
                            </Suspense>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2 justify-center">
                    <StyledLink href="/" label="Home" />
                    <RefreshButton />
                    <LogoutButton />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                Unauthorized.
            </div>
        )
    }
}


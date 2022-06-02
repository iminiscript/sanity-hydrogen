import IconLogo from './icons/IconLogo';

/**
 * A shared component and Suspense call that's used in `App.server.jsx` to let your app wait for code to load while declaring a loading state
 */
export default function LoadingFallback() {
  return (
    <header
      className="align-center fixed top-0 z-40 flex h-[4.375rem] w-full justify-between px-8 lg:h-[6.25rem]"
      role="banner"
    >
      <div className="absolute bottom-0 top-0 left-1/2 flex w-[50px] -translate-x-1/2 items-center lg:w-auto">
        <IconLogo className="h-auto w-full" />
      </div>
    </header>
  );
}

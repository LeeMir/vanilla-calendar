import MainPage from './pages/MainPage';

const $root = document.querySelector('#root')!;

const router = async () => {
  const routes = [{ path: '/', view: MainPage }];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  const match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch) ?? {
    route: routes[0],
    isMatch: true,
  };

  const $originView = $root.childNodes[0];
  const $view = new match.route.view({ $root });

  $root.removeChild($originView);
};

export default router;

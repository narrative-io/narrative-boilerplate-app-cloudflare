const DebugPage = () => import('../../components/pages/DebugPage.vue');
const QuickStartPage = () => import('../../components/pages/QuickStartPage.vue');
const NotFound = { template: "<div>Not found</div>" };

export default [
	{ path: '/', name: 'home', component: QuickStartPage },
	{ path: '/ping', name: "debug", component: DebugPage },
	{ path: "*", component: NotFound }
]
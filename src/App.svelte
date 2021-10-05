<script>
	import {Router, Route, Link, navigate} from 'svelte-navigator';
	import SignIn from './components/User/SignIn.svelte';
	import SignUp from './components/User/SignUp.svelte';
	import Main from './components/Home/Main.svelte';

	//navigate("/signin", {replace: true});
</script>

<html data-theme="light" lang="">
	<Router>
		<Link to="/main">Main</Link>
		<Link to="/signin">SignIn</Link>
		<main>
			<Route path="signin">
				<SignIn/>
			</Route>
			<Route path="/main/*">
				<Main/>
			</Route>
			<Route path="/signup">
				<SignUp/>
			</Route>
		</main>
	</Router>
</html>
<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

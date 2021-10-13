<script>
	import { Router, Route, Link, navigate } from "svelte-navigator";
	import SignIn from "./components/User/SignIn.svelte";
	import SignUp from "./components/User/SignUp.svelte";
	import Main from "./components/Home/Main.svelte";
	import { userToken, user } from "./Store/store";

	
	if(typeof $user === 'undefined'){
		navigate("/signin", { replace: true });
	}
	else if ($userToken.token !== "" &&  Object.keys($user).length !== 0) {
        navigate("/main", { replace: true });
    } else {
        navigate("/signin", { replace: true });
    }
</script>

<html data-theme="light" lang="">
	<main class="bg-base-200">
		<Router>
			<Route path="/signin">
				<SignIn />
			</Route>
			<Route path="/main/*">
				<Main />
			</Route>
			<Route path="/signup">
				<SignUp />
			</Route>
		</Router>
	</main>
</html>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

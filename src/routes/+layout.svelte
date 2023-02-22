<nav class="navbar navbar-expand-lg bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Svelte POC</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/blog">Blog</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/todo">Todo List</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/roll">Roll</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/expectedError">Expected Error</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/unexpectedError">Unexpected Error</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/pageoptions">Page Options</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/progresstweens">Progress bar</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/springs">Springs</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/transition">Transition</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<slot />

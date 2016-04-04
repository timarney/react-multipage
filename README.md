#What
Test sharing React Components across multiple physical HTML pages (not a single page app) using multiple Webpack entry points.

#Why
This setup allows different pages to pull in only the code they need (bundled via Webpack).

#Production Output
```
+-- dist
|   +-- home.bundle.js
|   +-- index.html
|   +-- page1.bundle.js
|   +-- page1.html
|   +-- page2.bundle.js
|   +-- page2.html
|   +-- vendors.js (React + React Dom) 👍
```

#Build
npm run build (output to production dir)

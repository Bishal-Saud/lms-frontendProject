# lms-frontendProject
# LMS FRONTEND

## setup instruction  
1.Clone the project.
```
... git clone https://github.com/Bishal-Saud/lms-frontendProject.git
```

2.Move into to the directory.
```
... cd lms-frontend 

```
3.Install Dependencies 
```
npm install
```
4.Run the server

```

npm dev run
```

### Setup instruction for taillwind css

[Tailwind Official docs](https://tailwindcss.com/docs/installation)
1. Install TailwindCss

```
npm install -D tailwindcss postcss autoprefixer
```

2. Create Tailwind Config file
```
npx tailwindcss init
```
3.Add file extension to tailwind config file content properties 
```
 [  "./index.html","./src/**/*.{html,js,jsx,ts,tsx}"]
```

4.Add the tailwind directives at the top of the `index.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Added daisyui drawer plugin 
```
 plugins: [require("daisyui"),require("@tailwindcss/line-clamp")],

```
### Adding plugins and dependencies 

 ```
 npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
 
 ```

### Configure auto import sort
1. Install single import sort
```
npm i -D eslint-plugin-simple-import-sort
```

2. Add rules in `.eslint.cjs`

```
'simple-import-sort/imports':'error',
```
3.Add simple-import-sort plugin `.eslint.cjs`

```
plugins: ['...','simple-import-sort'],
```

4.To enable auto import sort on file save in vsc

- open `setting.json`
- add the following config

```
 "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```
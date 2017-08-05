# AngularCosmosDB

    ## install angular cli
        npm install -g @angular/cli
    ## creat new angular project `angular-cosmodb`
        -sd=source directory
        ng new angular-cosmodb -sd src/client --minimal --style scss
    ## change directory to `angular-cosmodb`
        cd angular-cosmodb
    ## create server folder

    ## create index.js file

    ## install express and bodyparser
        npm i express body-parser --save
    ## create routes.js

    ## configure debuger
        `"program": "${workspaceRoot}/angular-cosmodb/src/server/index.js"`
    ## check result 
        http://localhost:3000/api/heroes

        `[
            {
                id: 10,
                name: "Dereje",
                saying: "Great day"
            }
        ]`
    ## create heroes component
        ng g c heroes --flat   
        
        Note because angular project was created with --minimal it will give you minimal folder so need to create manaly heroescomponent.html.
    ## create hero service
        ng g s hero -m app.module

        -m app.module will provide it in app.module

    ## To run first need to build to create dist folder
        ng b

    


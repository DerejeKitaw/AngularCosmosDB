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

    ## [Azure cli install](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
        curl -L https://aka.ms/InstallAzureCli | bash

        -if error use sudo, and might ask you to accept license for xcode
    ## az login
        -Take code and go to https://aka.ms/devicelogin to log in

        once you finish log in you will see login in the command line.

    ## create resource group
        -n name
        -l location
        az group create -n my-heroes-db-group -l "East US"

        once resource group created. create db

    ## create db
            -n database name
            -g created group name
            --kind database type
        az cosmosdb create -n my-cosmos-heroes-db -g my-heroes-db-group --kind MongoDB

    ## connect angular with cosmoDB
        install mongoose
        npm i mongoose --save

    ## create mongo.js

    ## create env/enviroment.js

        ## To get enviromental values
            az cosmosdb list-connection-strings -n my-cosmos-heroes-db -g my-heroes-db-group --query "connectionStrings[0].connectionString"

            // "mongodb://xxxxxxxx:gggggggg@my-cosmos-heroes-db.documents.azure.com:10255/?ssl=true"
            
            // const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`; //&replicaSet=globaldb`;
    ## create hero.js server side



    


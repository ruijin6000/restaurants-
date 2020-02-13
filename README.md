## Description
The Project used Node.js and React for the stack. And used MongoDB as database on cloud.

visit App online [https://restaurants1991.herokuapp.com/](https://restaurants1991.herokuapp.com/)

## Configuration :

### 1 : Install [Node.js](https://nodejs.org/en/) (npm) 

### 2 : Install node_modules on server-side (under Restaurant directory)
npm install

### 3: Install node_modules on client side  (run under client directory)
npm install    


## Development Mode  ([http://localhost:3000](http://localhost:3000))
### To test development mode on local  (under Restaurant directory)
npm run dev       



## Production Mode   ([http://localhost:5000](http://localhost:5000))
### Step 1 build the client side  (under client directory) 
npm run build
### Step 2 run server (under Restaurant directory)
npm run server 


## API

## *Search Cities*
#### http://127.0.0.1:3000/api/cities (POST) (dev mode)
#### http://127.0.0.1:5000/api/cities (POST) (pro mode)
##### Request Body:
	{
		"city_name": <string>	
	}


## *Search Establishments*
#### http://127.0.0.1:3000/api/search (POST) (dev mode)
#### http://127.0.0.1:5000/api/search (POST) (pro mode)
##### Request Body:
    {
        "city_id": <string>		
    }
    
    
## *Search Restaurants*
#### http://127.0.0.1:3000/api/search (POST) (dev mode)
#### http://127.0.0.1:5000/api/search (POST) (pro mode)
##### Request Body:
    {
        "city_id": <string>		
        "establishment_id" : <string>
    }
    
## *Show DB DATA*
#### http://127.0.0.1:3000/api/db (GET) (dev mode)
#### http://127.0.0.1:5000/api/db (GET) (pro mode)
#### https://restaurants1991.herokuapp.com/api/db  

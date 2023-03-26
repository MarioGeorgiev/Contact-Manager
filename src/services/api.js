export const settings ={
    host:'http://localhost:3030/users'
}
async function requst(url,options){
    try {
        let response = await fetch(url,options);
        
        if(response.ok ==false){
            const error = await response.json();
            throw Error(error.message)
        }
        try {
            let data = await response.json();
            return data;
        } catch (error) {
            return response
        }
        
       
    }
     catch (error) {
        if(error.message === 'Unauthorized')
        {
            alert("You are not login or your account is not authorized to perform this action")
            throw error
        }else if(error.message === "Resource not found"){

        }
        else{
            alert(error.message);
            throw error
        }
       
       
        
    }
}
function getOptions(method = 'get', body,){
    const options = {
        method,
        headers:{}    
    };
    
    const token = localStorage.getItem('authToken')
    if(token !=null){

        options.headers['X-Authorization'] = token
    }
   
    
    if(body){
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(body)
    }
   
   return options
}
export async function get(url){
    return await requst(url,getOptions())
}

export async function post(url,data){
    return await requst(url,getOptions('post', data))
}
export async function put(url,data){
    return await requst(url,getOptions('put', data))
}
export async function del(url){
    return await requst(url,getOptions('delete'))
}

export async function login(email,password){
    const result = await post(settings.host + '/login',{email,password})
    

     localStorage.setItem('authToken' , result.accessToken)
     localStorage.setItem('email' , result.email)
     localStorage.setItem('userId' , result._id)
     return result;
}

export async function register(email,password,){
    const result = await post(settings.host + '/register',{email,password})

    localStorage.setItem('authToken' , result.accessToken)
    localStorage.setItem('email' , result.email)
    localStorage.setItem('userId' , result._id)
    return result;
}
export async function logout(){
    const result = await post(settings.host + '/logout',{})
    
    localStorage.removeItem('authToken')
    localStorage.removeItem('email')
    localStorage.removeItem('userId')
    return result;
}
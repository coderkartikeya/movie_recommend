import { NextRequest, NextResponse } from "next/server";

export async function  GET(){
    try{
        
        
    return NextResponse.json({
        status:200,
        result:"hello"
    })

}catch(error){
    
    console.error(error);
    return NextResponse.json({
        status:400,
        body:error
    })
}
}

export async function POST(res:any){
    try{

        const result =await res.json();
        // console.log(result);
        const title=result.name;
        const rest=await fetch('http://127.0.0.1:5000/movie',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({movie:title})
        })
        const data=await rest.json();
        
        
        

        
        
        return NextResponse.json({
            status:200,
            data:data.recommendations
        })

    }catch(error){
        console.error(error);
        return NextResponse.json({
            status:400,
            body:error
        })
    }
    
}
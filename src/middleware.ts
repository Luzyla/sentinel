export { default } from "next-auth/middleware"

export const config = { 
    matcher: [
        {
            source: "/dashboard|list/(.*)",
            locale: false,
        }
    ]
    
}

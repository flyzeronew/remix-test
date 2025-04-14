// app/routes/api/menu.ts
import { json } from "@remix-run/node";

export function loader() {
    const json = [
        { 
            id: 1, 
            name: "🍕 Pizza" 
        }
    ];
    return json;
}

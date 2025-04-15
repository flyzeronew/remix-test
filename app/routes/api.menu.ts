// app/routes/api/menu.ts
import { json } from "@remix-run/node";

export function loader() {
    const json = [
        {
            'title':'首頁',
            'url':'/',
        },
        {
            'title':'即時',
            'url':'/',
        },
        {
            'title':'生活',
            'url':'/',
        },
        {
            'title':'政治',
            'url':'/',
        },
        {
            'title':'娛樂',
            'url':'/',
        },
    ];
    return json;
}

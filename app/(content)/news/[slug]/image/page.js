import React from 'react';
import {notFound} from "next/navigation";
import {getNewsItem} from "@/lib/news";

async function ImagePage({params}) {

    const newsItemsSlug = params.slug;
    const newsItem = await getNewsItem(newsItemsSlug)

    if(!newsItem) {
        notFound();
    }
    return (
        <div className={"fullscreen-image"}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        </div>
    );
}

export default ImagePage;
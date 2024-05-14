import React from 'react';

import NewsList from "@/components/news-list";
import {getAllNews} from "@/lib/news";

async function NewsPage() {

    const news = await getAllNews()


    return (
        <>
            <h1>News page</h1>
            <NewsList news={news} />
        </>
    );
}

export default NewsPage;
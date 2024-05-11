import React from 'react';
import Link from "next/link";

import {DUMMY_NEWS} from '@/dummy-news'
import NewsList from "@/components/news-list";

function NewsPage() {
    return (
        <>
            <h1>News page</h1>
            <NewsList news={DUMMY_NEWS}/>
        </>
    );
}

export default NewsPage;
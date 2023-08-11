import React from "react";
import axios from "axios";

export default async function getImageUrl(query) {
    const response = await axios.get("https://api.unsplash.com/search/photos/", {
        params: {
            client_id: "X5D0XoHnOcbuKL4DGH2DmZGIuGJ6nm4NLJlzN6TODLQ",
            query: query,
        },
    });
    return response.data.results[0].urls.small;
}

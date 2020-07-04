const get = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((res) => {
            if (res.status === 200) {
                resolve(res.json());
            }
            if (res.status == 401) {
                window.location = './login';
            }
            if (res.status != 500) {
                res.json().then((data) => {
                    reject(data);
                });

            } else {
                window.location = './500';
            }
        });
    });
};

const post = (params) => {
    return new Promise((resolve, reject) => {
        fetch(params.url, {
            method: params.method,
            headers: params.headers,
            body: params.body
        }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => {
                    resolve(data);
                });
            }
            if (res.status == 401) {
                window.location = './login';
            }
            if (res.status != 500) {
                res.json().then((data) => {
                    reject(data);
                });

            } else {
                window.location = './500';
            }
        });
    });
};


module.exports = {
    get,
    post
};
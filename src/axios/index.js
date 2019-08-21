import Vue from 'vue'
import axios from 'axios';
import config from '@/config';
import VueAxios from 'vue-axios';
import qs from 'qs';

Vue.use(VueAxios, axios);

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function get(param) {
    let baseURL = param.baseURL || config.current;
    let url = (typeof param == 'string' ? param : param.url) || '';
    let data = qs.stringify(param.data) || {};
    let success = param.success || new Function();
    let error = param.error || new Function();
    axios.get(baseURL + url, {params:data})
        .then(function (response) {
            success(response.data, response);
        })
        .catch(function (err) {
            error(err)
        });
}

function post(param) {
    let baseURL = param.baseURL || config.current;
    let url = (typeof param == 'string' ? param : param.url) || '';
    let data = qs.stringify(param.data) || {};
    let success = param.success || new Function();
    let error = param.error || new Function();
    if (param.contentType) {
        axios.defaults.headers.post['Content-Type'] = param.contentType;
        data = param.data
    }

    axios.post(baseURL + url, data)
        .then(function (response) {
            success(response.data, response)
        })
        .catch(function (err) {
            error(err)
        });
}

async function $get(param) {
    let baseURL = param.baseURL || config.current;
    let url = (typeof param == 'string' ? param : param.url) || '';
    let query = param.data;
    try {
        let {
            data
        } = await axios.get(baseURL + url, {params:query});
        return data;
    } catch (error) {
        console.log(url+'请求有误');
    }

}

async function $post(param) {
    let baseURL = param.baseURL || config.current;
    let url = (typeof param == 'string' ? param : param.url) || '';
    if (param.contentType) {
        try {
            axios.defaults.headers.post['Content-Type'] = param.contentType;
            let {
                data
            } = await axios.post(baseURL + url, param.data);
            return data;
        } catch (error) {
            console.log(url+'请求有误');
        }
    } else {
        try {
            let query = qs.stringify(param.data) || {};
            let {
                data
            } = await axios.post(baseURL + url, query);
            return data;
        } catch (error) {
            console.log(url+'请求有误');
        }
    }
}

async function $postFile(param) {
    let baseURL = param.baseURL || config.current;
    let url = (typeof param == 'string' ? param : param.url) || '';
    let fromData = new FormData();
    param.file && fromData.append('file', param.file);
    try {
        axios.defaults.headers.post['Content-Type'] = param.contentType || 'multipart/form-data';
        let {
            data
        } = await axios.post(baseURL + url,fromData);
        return data;
    } catch (error) {
        console.log(url+'请求有误');
    }
}


export default {
    get,
    post,
    $get,
    $post,
    $postFile
}
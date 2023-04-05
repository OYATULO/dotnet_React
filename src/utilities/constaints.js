const URI_LOCAL="https://localhost:7292";

const endpoints ={
    GET_ALL_POST:"get-all-post",
    Get_post_byId:"get-post-id",
    ADD_post:"create-post",
    Update_post:"update-post",
    delete_byID:"delete-byid"

} ;
const development={
    Api_url_get_all_post: `${URI_LOCAL}/${endpoints.GET_ALL_POST}`,
    Api_url_get_by_id: `${URI_LOCAL}/${endpoints.Get_post_byId}`,
    Api_url_add_post: `${URI_LOCAL}/${endpoints.ADD_post}`,
    Api_url_update_post: `${URI_LOCAL}/${endpoints.Update_post}`,
    Api_url_delete_by_id: `${URI_LOCAL}/${endpoints.delete_byID}`,
}

const Constant = development;

export default Constant;

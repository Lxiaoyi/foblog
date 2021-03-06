app.service("ArticleManageService", function(RequestService) {
	this.list = function (pageNumber, pageSize,articleStatus) {
        return RequestService.postRequest('/manage/article' ,$.param({
        	"pageNumber": pageNumber,
        	"pageSize":pageSize,
        	"articleStatus":articleStatus
        	}), cfg_form);
    };
    this.get = function (id) {
        return RequestService.getRequest('/manage/article/' + id, cfg_form);
    };
    this.put = function(article){
    	return RequestService.putRequest('/manage/article/save' ,article, cfg_json);
    }
    this.post = function(article){
    	return RequestService.postRequest('/manage/article/save' ,article, cfg_json);
    }
    this.getCategorys = function () {
    	return RequestService.getRequest('/manage/article/category', cfg_form);
    };
    this.getTags = function () {
    	return RequestService.getRequest('/manage/article/tag', cfg_form);
    };
    /*
	 * this.delete = function (id) { return
	 * RequestService.deleteRequest('/testbean/' + id, cfg_form); };
	 */
})
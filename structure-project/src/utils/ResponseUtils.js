export default class ResponseUtils {

  buildResponse(hasError, successData, errorData) {
    if(hasError == null) hasError = false;
    return {"error" : hasError,"message" : hasError ? errorData : successData};
  }

}

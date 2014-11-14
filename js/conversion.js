var origConversionSuccess = conversionSuccess;
conversionSuccess = function(resp) {
  origConversionSuccess(resp);
  $("#conversion-form").addClass("hidden");
  $("#after-conversion").removeClass("hidden");
}

# BaseAiOptimizationLLmMentionsTargetElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**search_scope** | **string[]** | target domain search scope<br>optional field<br>possible values:<br>any, sources, search_results<br>default value: any |[optional]|
**include_subdomains** | **boolean** | indicates if the subdomains of the target domain will be included in the search<br>optional field<br>if set to true, the subdomains will be included in the search<br>default value: false |[optional]|
**search_filter** | **string** | target domain search filter<br>optional field<br>possible values:<br>include, exclude<br>default value: include |[optional]|
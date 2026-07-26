# StoresCountInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**count** | **number** | *number of stores that offer the product* |[optional]|
**displayed_text** | **string** | *text displayed on the Google Shopping page* |[optional]|
**count_from_text** | **boolean** | *whether the number of stores is taken from text*. indicates whether the number of stores is taken from `displayed_text`;. if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is `false`;. if the API cannot find the number of stores in the HTML code of the page, it takes the number from the `displayed_text`;. in this case, the parameter is `true` |[optional]|
# SerpAiSummaryRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**task_id** | **string** | *task identifier*. **required field**. unique identifier of the associated task in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. you will be able to use it within **30 days** to request the results of the task at any time |[optional]|
**prompt** | **string** | *AI prompt*. optional field. additional task for AI summariser;. any form of text, question or information that communicates to AI what response you're looking for;. max number of symbols or characters you can specify: `2000`;. **note:** your prompt has to be relevant to the keyword specified in the POST request to SERP API |[optional]|
**support_extra** | **boolean** | *support extra SERP features*. optional field. if set to `true`, the AI model will consider the following extra SERP features, in addition to `organic` results: `answer_box`, `knowledge_graph`, `featured_snippet`;. default value: `true` |[optional]|
**fetch_content** | **boolean** | *fetch content from pages in SERPs*. optional field. if set to `true`, the API will fetch the content from pages featured in SERP results, and the AI model will consider this content when generating the summary in the result;. default value: `false` |[optional]|
**include_links** | **boolean** | *include source links in the summary*. optional field. if set to `true`, the `summary` field in the API response will contain links to sources of the generated summary;. default value: `false` |[optional]|
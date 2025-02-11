[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageContentParsingRequestInfo

# Interface: IOnPageContentParsingRequestInfo

Defined in: main.ts:173068

## Indexable

\[`key`: `string`\]: `any`

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:173081

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
note: the enable_content_parsing parameter in the POST request must be set to true
example:
"07131248-1535-0216-1000-17384017ad04"

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:173074

URL of the content to parse
required field
URL of the page to parse
example:
https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api

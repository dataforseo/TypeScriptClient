[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IOnPageContentParsingRequestInfo

# Interface: IOnPageContentParsingRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### id?

> `optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
note: the enable_content_parsing parameter in the POST request must be set to true
example:
"07131248-1535-0216-1000-17384017ad04"

#### Defined in

main.ts:165273

***

### url?

> `optional` **url**: `string`

URL of the content to parse
required field
URL of the page to parse
example:
https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api

#### Defined in

main.ts:165266

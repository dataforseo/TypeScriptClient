[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageRawHtmlRequestInfo

# Interface: IOnPageRawHtmlRequestInfo

Defined in: main.ts:172350

## Indexable

\[`key`: `string`\]: `any`

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:172356

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:172361

page url
required field
the absolute URL of a page to request HTML
Note: this field is optional if the task was set using the Instant Pages endpoint

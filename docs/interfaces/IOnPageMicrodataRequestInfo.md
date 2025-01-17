[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageMicrodataRequestInfo

# Interface: IOnPageMicrodataRequestInfo

Defined in: main.ts:171615

## Indexable

\[`key`: `string`\]: `any`

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:171621

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
"07131248-1535-0216-1000-17384017ad04"

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:171633

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:171627

resource URL
required field
you can get this URL in the response of the Pages endpoint
example:
https://dataforseo.com/apis

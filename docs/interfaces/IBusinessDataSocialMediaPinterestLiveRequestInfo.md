[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataSocialMediaPinterestLiveRequestInfo

# Interface: IBusinessDataSocialMediaPinterestLiveRequestInfo

Defined in: main.ts:229698

## Indexable

\[`key`: `string`\]: `any`

## Properties

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:229711

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:229705

target URLs
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/
Note: you can specify 10 targets maximum. You will be charged per earch URL you specify in this array

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageContentParsingRequestInfo

# Interface: IOnPageContentParsingRequestInfo

## Implemented by

- [`OnPageContentParsingRequestInfo`](../classes/OnPageContentParsingRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [id](IOnPageContentParsingRequestInfo.md#id)
- [url](IOnPageContentParsingRequestInfo.md#url)

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
note: the enable_content_parsing parameter in the POST request must be set to true
example:
"07131248-1535-0216-1000-17384017ad04"

#### Defined in

[main.ts:151948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151948)

___

### url

• `Optional` **url**: `string`

URL of the content to parse
required field
URL of the page to parse
example:
https://www.fujielectric.com/

#### Defined in

[main.ts:151941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151941)

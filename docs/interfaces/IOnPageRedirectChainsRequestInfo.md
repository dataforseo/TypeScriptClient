[Documentation](../README.md) / [Exports](../modules.md) / IOnPageRedirectChainsRequestInfo

# Interface: IOnPageRedirectChainsRequestInfo

## Implemented by

- [`OnPageRedirectChainsRequestInfo`](../classes/OnPageRedirectChainsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IOnPageRedirectChainsRequestInfo.md#filters)
- [id](IOnPageRedirectChainsRequestInfo.md#id)
- [limit](IOnPageRedirectChainsRequestInfo.md#limit)
- [offset](IOnPageRedirectChainsRequestInfo.md#offset)
- [tag](IOnPageRedirectChainsRequestInfo.md#tag)
- [url](IOnPageRedirectChainsRequestInfo.md#url)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can use only one filtering parameter with this endpoint
the following filtering parameter is supported:
is_redirect_loop
the following operators are supported:
regex, =, <>
examples:
["is_redirect_loop","=","true"]
["is_redirect_loop","<>","false"]

#### Defined in

main.ts:148992

___

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

main.ts:148966

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned redirect chains
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:148976

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned redirect chains
optional field
default value: 0
if you specify the 10 value, the first ten redirect chains in the results array will be omitted and the data will be provided for the successive redirect chains

#### Defined in

main.ts:148981

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:148998

___

### url

• `Optional` **url**: `string`

page URL
optional field
absolute URL of the target page
if you use this field, the API response will return only redirect chains which contain the specified URL

#### Defined in

main.ts:148971

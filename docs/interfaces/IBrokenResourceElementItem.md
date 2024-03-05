[dataforseo-client](../README.md) / [Exports](../modules.md) / IBrokenResourceElementItem

# Interface: IBrokenResourceElementItem

## Hierarchy

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

  ↳ **`IBrokenResourceElementItem`**

## Implemented by

- [`BrokenResourceElementItem`](../classes/BrokenResourceElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [accept\_type](IBrokenResourceElementItem.md#accept_type)
- [cache\_control](IBrokenResourceElementItem.md#cache_control)
- [checks](IBrokenResourceElementItem.md#checks)
- [content\_encoding](IBrokenResourceElementItem.md#content_encoding)
- [encoded\_size](IBrokenResourceElementItem.md#encoded_size)
- [fetch\_time](IBrokenResourceElementItem.md#fetch_time)
- [fetch\_timing](IBrokenResourceElementItem.md#fetch_timing)
- [last\_modified](IBrokenResourceElementItem.md#last_modified)
- [location](IBrokenResourceElementItem.md#location)
- [media\_type](IBrokenResourceElementItem.md#media_type)
- [meta](IBrokenResourceElementItem.md#meta)
- [server](IBrokenResourceElementItem.md#server)
- [size](IBrokenResourceElementItem.md#size)
- [status\_code](IBrokenResourceElementItem.md#status_code)
- [total\_transfer\_size](IBrokenResourceElementItem.md#total_transfer_size)
- [url](IBrokenResourceElementItem.md#url)

## Properties

### accept\_type

• `Optional` **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Defined in

[main.ts:146978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146978)

___

### cache\_control

• `Optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Defined in

[main.ts:146966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146966)

___

### checks

• `Optional` **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

[main.ts:146969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146969)

___

### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Defined in

[main.ts:146971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146971)

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Defined in

[main.ts:146954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146954)

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Defined in

[main.ts:146962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146962)

___

### fetch\_timing

• `Optional` **fetch\_timing**: [`FetchTiming`](../classes/FetchTiming.md)

resource fething time range

#### Defined in

[main.ts:146964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146964)

___

### last\_modified

• `Optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Defined in

[main.ts:146983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146983)

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Defined in

[main.ts:146946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146946)

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a resource

#### Defined in

[main.ts:146973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146973)

___

### meta

• `Optional` **meta**: [`PageMetaInfo`](../classes/PageMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Defined in

[main.ts:146941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146941)

___

### server

• `Optional` **server**: `string`

server version

#### Defined in

[main.ts:146980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146980)

___

### size

• `Optional` **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Defined in

[main.ts:146951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146951)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the page where a given resource is located

#### Defined in

[main.ts:146943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146943)

___

### total\_transfer\_size

• `Optional` **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Defined in

[main.ts:146957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146957)

___

### url

• `Optional` **url**: `string`

resource URL

#### Defined in

[main.ts:146948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146948)

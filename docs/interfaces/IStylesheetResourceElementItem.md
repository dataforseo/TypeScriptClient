[dataforseo-client](../README.md) / [Exports](../modules.md) / IStylesheetResourceElementItem

# Interface: IStylesheetResourceElementItem

## Hierarchy

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

  ↳ **`IStylesheetResourceElementItem`**

## Implemented by

- [`StylesheetResourceElementItem`](../classes/StylesheetResourceElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [accept\_type](IStylesheetResourceElementItem.md#accept_type)
- [cache\_control](IStylesheetResourceElementItem.md#cache_control)
- [checks](IStylesheetResourceElementItem.md#checks)
- [content\_encoding](IStylesheetResourceElementItem.md#content_encoding)
- [duration\_time](IStylesheetResourceElementItem.md#duration_time)
- [encoded\_size](IStylesheetResourceElementItem.md#encoded_size)
- [fetch\_end](IStylesheetResourceElementItem.md#fetch_end)
- [fetch\_start](IStylesheetResourceElementItem.md#fetch_start)
- [fetch\_time](IStylesheetResourceElementItem.md#fetch_time)
- [fetch\_timing](IStylesheetResourceElementItem.md#fetch_timing)
- [initiator](IStylesheetResourceElementItem.md#initiator)
- [is\_render\_blocking](IStylesheetResourceElementItem.md#is_render_blocking)
- [last\_modified](IStylesheetResourceElementItem.md#last_modified)
- [location](IStylesheetResourceElementItem.md#location)
- [media\_type](IStylesheetResourceElementItem.md#media_type)
- [meta](IStylesheetResourceElementItem.md#meta)
- [resource\_errors](IStylesheetResourceElementItem.md#resource_errors)
- [server](IStylesheetResourceElementItem.md#server)
- [size](IStylesheetResourceElementItem.md#size)
- [status\_code](IStylesheetResourceElementItem.md#status_code)
- [total\_transfer\_size](IStylesheetResourceElementItem.md#total_transfer_size)
- [url](IStylesheetResourceElementItem.md#url)

## Properties

### accept\_type

• `Optional` **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Defined in

[main.ts:146461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146461)

___

### cache\_control

• `Optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Defined in

[main.ts:146447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146447)

___

### checks

• `Optional` **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

[main.ts:146450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146450)

___

### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Defined in

[main.ts:146454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146454)

___

### duration\_time

• `Optional` **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Defined in

[main.ts:146470](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146470)

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Defined in

[main.ts:146435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146435)

___

### fetch\_end

• `Optional` **fetch\_end**: `number`

time to complete downloading the resource
the amount of time the browser needs to complete downloading a resource

#### Defined in

[main.ts:146476](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146476)

___

### fetch\_start

• `Optional` **fetch\_start**: `number`

time to start downloading the resource
the amount of time the browser needs to start downloading a resource

#### Defined in

[main.ts:146473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146473)

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Defined in

[main.ts:146443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146443)

___

### fetch\_timing

• `Optional` **fetch\_timing**: [`FetchTiming`](../classes/FetchTiming.md)

resource fething time range

#### Defined in

[main.ts:146445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146445)

___

### initiator

• `Optional` **initiator**: `string`

resource initiator

#### Defined in

[main.ts:146468](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146468)

___

### is\_render\_blocking

• `Optional` **is\_render\_blocking**: `boolean`

indicates whether the resource blocks rendering

#### Defined in

[main.ts:146478](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146478)

___

### last\_modified

• `Optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Defined in

[main.ts:146466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146466)

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Defined in

[main.ts:146427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146427)

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a resource

#### Defined in

[main.ts:146456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146456)

___

### meta

• `Optional` **meta**: [`ResourceMetaInfo`](../classes/ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Defined in

[main.ts:146422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146422)

___

### resource\_errors

• `Optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Defined in

[main.ts:146452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146452)

___

### server

• `Optional` **server**: `string`

server version

#### Defined in

[main.ts:146463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146463)

___

### size

• `Optional` **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Defined in

[main.ts:146432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146432)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the page where a given resource is located

#### Defined in

[main.ts:146424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146424)

___

### total\_transfer\_size

• `Optional` **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Defined in

[main.ts:146438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146438)

___

### url

• `Optional` **url**: `string`

resource URL

#### Defined in

[main.ts:146429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146429)

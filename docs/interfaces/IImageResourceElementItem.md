[dataforseo-client](../README.md) / [Exports](../modules.md) / IImageResourceElementItem

# Interface: IImageResourceElementItem

## Hierarchy

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

  ↳ **`IImageResourceElementItem`**

## Implemented by

- [`ImageResourceElementItem`](../classes/ImageResourceElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [accept\_type](IImageResourceElementItem.md#accept_type)
- [cache\_control](IImageResourceElementItem.md#cache_control)
- [checks](IImageResourceElementItem.md#checks)
- [content\_encoding](IImageResourceElementItem.md#content_encoding)
- [encoded\_size](IImageResourceElementItem.md#encoded_size)
- [fetch\_time](IImageResourceElementItem.md#fetch_time)
- [fetch\_timing](IImageResourceElementItem.md#fetch_timing)
- [last\_modified](IImageResourceElementItem.md#last_modified)
- [location](IImageResourceElementItem.md#location)
- [media\_type](IImageResourceElementItem.md#media_type)
- [meta](IImageResourceElementItem.md#meta)
- [resource\_errors](IImageResourceElementItem.md#resource_errors)
- [server](IImageResourceElementItem.md#server)
- [size](IImageResourceElementItem.md#size)
- [status\_code](IImageResourceElementItem.md#status_code)
- [total\_transfer\_size](IImageResourceElementItem.md#total_transfer_size)
- [url](IImageResourceElementItem.md#url)

## Properties

### accept\_type

• `Optional` **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Defined in

[main.ts:146796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146796)

___

### cache\_control

• `Optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Defined in

[main.ts:146784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146784)

___

### checks

• `Optional` **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

[main.ts:146787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146787)

___

### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Defined in

[main.ts:146789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146789)

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Defined in

[main.ts:146772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146772)

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Defined in

[main.ts:146780](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146780)

___

### fetch\_timing

• `Optional` **fetch\_timing**: [`FetchTiming`](../classes/FetchTiming.md)

resource fething time range

#### Defined in

[main.ts:146782](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146782)

___

### last\_modified

• `Optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Defined in

[main.ts:146801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146801)

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Defined in

[main.ts:146764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146764)

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a resource

#### Defined in

[main.ts:146791](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146791)

___

### meta

• `Optional` **meta**: [`ResourceMetaInfo`](../classes/ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Defined in

[main.ts:146759](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146759)

___

### resource\_errors

• `Optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Defined in

[main.ts:146803](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146803)

___

### server

• `Optional` **server**: `string`

server version

#### Defined in

[main.ts:146798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146798)

___

### size

• `Optional` **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Defined in

[main.ts:146769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146769)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the page where a given resource is located

#### Defined in

[main.ts:146761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146761)

___

### total\_transfer\_size

• `Optional` **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Defined in

[main.ts:146775](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146775)

___

### url

• `Optional` **url**: `string`

resource URL

#### Defined in

[main.ts:146766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146766)

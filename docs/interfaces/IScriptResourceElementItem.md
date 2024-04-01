[Documentation](../README.md) / [Exports](../modules.md) / IScriptResourceElementItem

# Interface: IScriptResourceElementItem

## Hierarchy

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

  ↳ **`IScriptResourceElementItem`**

## Implemented by

- [`ScriptResourceElementItem`](../classes/ScriptResourceElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [accept\_type](IScriptResourceElementItem.md#accept_type)
- [cache\_control](IScriptResourceElementItem.md#cache_control)
- [checks](IScriptResourceElementItem.md#checks)
- [content\_encoding](IScriptResourceElementItem.md#content_encoding)
- [encoded\_size](IScriptResourceElementItem.md#encoded_size)
- [fetch\_time](IScriptResourceElementItem.md#fetch_time)
- [fetch\_timing](IScriptResourceElementItem.md#fetch_timing)
- [last\_modified](IScriptResourceElementItem.md#last_modified)
- [location](IScriptResourceElementItem.md#location)
- [media\_type](IScriptResourceElementItem.md#media_type)
- [meta](IScriptResourceElementItem.md#meta)
- [resource\_errors](IScriptResourceElementItem.md#resource_errors)
- [server](IScriptResourceElementItem.md#server)
- [size](IScriptResourceElementItem.md#size)
- [status\_code](IScriptResourceElementItem.md#status_code)
- [total\_transfer\_size](IScriptResourceElementItem.md#total_transfer_size)
- [url](IScriptResourceElementItem.md#url)

## Properties

### accept\_type

• `Optional` **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Defined in

main.ts:152037

___

### cache\_control

• `Optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Defined in

main.ts:152025

___

### checks

• `Optional` **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

main.ts:152028

___

### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Defined in

main.ts:152030

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Defined in

main.ts:152013

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Defined in

main.ts:152021

___

### fetch\_timing

• `Optional` **fetch\_timing**: [`FetchTiming`](../classes/FetchTiming.md)

resource fething time range

#### Defined in

main.ts:152023

___

### last\_modified

• `Optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Defined in

main.ts:152042

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Defined in

main.ts:152005

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a resource

#### Defined in

main.ts:152032

___

### meta

• `Optional` **meta**: [`ResourceMetaInfo`](../classes/ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Defined in

main.ts:152000

___

### resource\_errors

• `Optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Defined in

main.ts:152044

___

### server

• `Optional` **server**: `string`

server version

#### Defined in

main.ts:152039

___

### size

• `Optional` **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Defined in

main.ts:152010

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the page where a given resource is located

#### Defined in

main.ts:152002

___

### total\_transfer\_size

• `Optional` **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Defined in

main.ts:152016

___

### url

• `Optional` **url**: `string`

resource URL

#### Defined in

main.ts:152007

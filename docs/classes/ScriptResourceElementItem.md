**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ScriptResourceElementItem

# Class: ScriptResourceElementItem

## Extends

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Implements

- [`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ScriptResourceElementItem(data)

> **new ScriptResourceElementItem**(`data`?): [`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Parameters

• **data?**: [`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md)

#### Returns

[`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

#### Source

main.ts:154065

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

#### Source

main.ts:20820

***

### accept\_type?

> **`optional`** **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`accept_type`](../interfaces/IScriptResourceElementItem.md#accept_type)

#### Source

main.ts:154054

***

### cache\_control?

> **`optional`** **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`cache_control`](../interfaces/IScriptResourceElementItem.md#cache_control)

#### Source

main.ts:154042

***

### checks?

> **`optional`** **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

 \[`key`: `string`\]: `boolean`

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`checks`](../interfaces/IScriptResourceElementItem.md#checks)

#### Source

main.ts:154045

***

### content\_encoding?

> **`optional`** **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`content_encoding`](../interfaces/IScriptResourceElementItem.md#content_encoding)

#### Source

main.ts:154047

***

### encoded\_size?

> **`optional`** **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`encoded_size`](../interfaces/IScriptResourceElementItem.md#encoded_size)

#### Source

main.ts:154030

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`fetch_time`](../interfaces/IScriptResourceElementItem.md#fetch_time)

#### Source

main.ts:154038

***

### fetch\_timing?

> **`optional`** **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`fetch_timing`](../interfaces/IScriptResourceElementItem.md#fetch_timing)

#### Source

main.ts:154040

***

### last\_modified?

> **`optional`** **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`last_modified`](../interfaces/IScriptResourceElementItem.md#last_modified)

#### Source

main.ts:154059

***

### location?

> **`optional`** **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`location`](../interfaces/IScriptResourceElementItem.md#location)

#### Source

main.ts:154022

***

### media\_type?

> **`optional`** **media\_type**: `string`

types of media used to display a resource

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`media_type`](../interfaces/IScriptResourceElementItem.md#media_type)

#### Source

main.ts:154049

***

### meta?

> **`optional`** **meta**: [`ResourceMetaInfo`](ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`meta`](../interfaces/IScriptResourceElementItem.md#meta)

#### Source

main.ts:154017

***

### resource\_errors?

> **`optional`** **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`resource_errors`](../interfaces/IScriptResourceElementItem.md#resource_errors)

#### Source

main.ts:154061

***

### server?

> **`optional`** **server**: `string`

server version

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`server`](../interfaces/IScriptResourceElementItem.md#server)

#### Source

main.ts:154056

***

### size?

> **`optional`** **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`size`](../interfaces/IScriptResourceElementItem.md#size)

#### Source

main.ts:154027

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the page where a given resource is located

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`status_code`](../interfaces/IScriptResourceElementItem.md#status_code)

#### Source

main.ts:154019

***

### total\_transfer\_size?

> **`optional`** **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`total_transfer_size`](../interfaces/IScriptResourceElementItem.md#total_transfer_size)

#### Source

main.ts:154033

***

### url?

> **`optional`** **url**: `string`

resource URL

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`url`](../interfaces/IScriptResourceElementItem.md#url)

#### Source

main.ts:154024

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`init`](BaseOnPageResourceItemInfo.md#init)

#### Source

main.ts:154070

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`toJSON`](BaseOnPageResourceItemInfo.md#tojson)

#### Source

main.ts:154110

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)

#### Source

main.ts:154103

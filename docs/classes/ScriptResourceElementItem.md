[**Documentation**](../README.md) • **Docs**

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

### new ScriptResourceElementItem()

> **new ScriptResourceElementItem**(`data`?): [`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Parameters

• **data?**: [`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md)

#### Returns

[`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

#### Defined in

main.ts:159878

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

#### Defined in

main.ts:21367

***

### accept\_type?

> `optional` **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`accept_type`](../interfaces/IScriptResourceElementItem.md#accept_type)

#### Defined in

main.ts:159867

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`cache_control`](../interfaces/IScriptResourceElementItem.md#cache_control)

#### Defined in

main.ts:159855

***

### checks?

> `optional` **checks**: `object`

resource check-ups
contents of the array depend on the resource_type

#### Index Signature

 \[`key`: `string`\]: `boolean`

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`checks`](../interfaces/IScriptResourceElementItem.md#checks)

#### Defined in

main.ts:159858

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`content_encoding`](../interfaces/IScriptResourceElementItem.md#content_encoding)

#### Defined in

main.ts:159860

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`encoded_size`](../interfaces/IScriptResourceElementItem.md#encoded_size)

#### Defined in

main.ts:159843

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`fetch_time`](../interfaces/IScriptResourceElementItem.md#fetch_time)

#### Defined in

main.ts:159851

***

### fetch\_timing?

> `optional` **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`fetch_timing`](../interfaces/IScriptResourceElementItem.md#fetch_timing)

#### Defined in

main.ts:159853

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`last_modified`](../interfaces/IScriptResourceElementItem.md#last_modified)

#### Defined in

main.ts:159872

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`location`](../interfaces/IScriptResourceElementItem.md#location)

#### Defined in

main.ts:159835

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a resource

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`media_type`](../interfaces/IScriptResourceElementItem.md#media_type)

#### Defined in

main.ts:159862

***

### meta?

> `optional` **meta**: [`ResourceMetaInfo`](ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`meta`](../interfaces/IScriptResourceElementItem.md#meta)

#### Defined in

main.ts:159830

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`resource_errors`](../interfaces/IScriptResourceElementItem.md#resource_errors)

#### Defined in

main.ts:159874

***

### server?

> `optional` **server**: `string`

server version

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`server`](../interfaces/IScriptResourceElementItem.md#server)

#### Defined in

main.ts:159869

***

### size?

> `optional` **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`size`](../interfaces/IScriptResourceElementItem.md#size)

#### Defined in

main.ts:159840

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page where a given resource is located

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`status_code`](../interfaces/IScriptResourceElementItem.md#status_code)

#### Defined in

main.ts:159832

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`total_transfer_size`](../interfaces/IScriptResourceElementItem.md#total_transfer_size)

#### Defined in

main.ts:159846

***

### url?

> `optional` **url**: `string`

resource URL

#### Implementation of

[`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md).[`url`](../interfaces/IScriptResourceElementItem.md#url)

#### Defined in

main.ts:159837

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`init`](BaseOnPageResourceItemInfo.md#init)

#### Defined in

main.ts:159883

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`toJSON`](BaseOnPageResourceItemInfo.md#tojson)

#### Defined in

main.ts:159923

***

### fromJS()

> `static` **fromJS**(`data`): [`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)

#### Defined in

main.ts:159916

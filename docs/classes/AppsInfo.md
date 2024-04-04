**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppsInfo

# Class: AppsInfo

## Implements

- [`IAppsInfo`](../interfaces/IAppsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppsInfo(data)

> **new AppsInfo**(`data`?): [`AppsInfo`](AppsInfo.md)

#### Parameters

• **data?**: [`IAppsInfo`](../interfaces/IAppsInfo.md)

#### Returns

[`AppsInfo`](AppsInfo.md)

#### Source

main.ts:185221

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

ID of the app

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`app_id`](../interfaces/IAppsInfo.md#app_id)

#### Source

main.ts:185213

***

### title?

> **`optional`** **title**: `string`

title of the app

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`title`](../interfaces/IAppsInfo.md#title)

#### Source

main.ts:185215

***

### url?

> **`optional`** **url**: `string`

URL to the app page on Google Play

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`url`](../interfaces/IAppsInfo.md#url)

#### Source

main.ts:185217

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:185230

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:185249

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppsInfo`](AppsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppsInfo`](AppsInfo.md)

#### Source

main.ts:185242

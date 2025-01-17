[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppsInfo

# Class: AppsInfo

Defined in: main.ts:202000

## Implements

- [`IAppsInfo`](../interfaces/IAppsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppsInfo()

> **new AppsInfo**(`data`?): [`AppsInfo`](AppsInfo.md)

Defined in: main.ts:202010

#### Parameters

##### data?

[`IAppsInfo`](../interfaces/IAppsInfo.md)

#### Returns

[`AppsInfo`](AppsInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:202002

ID of the app

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`app_id`](../interfaces/IAppsInfo.md#app_id)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:202004

title of the app

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`title`](../interfaces/IAppsInfo.md#title)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:202006

URL to the app page on Google Play

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`url`](../interfaces/IAppsInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:202019

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:202038

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppsInfo`](AppsInfo.md)

Defined in: main.ts:202031

#### Parameters

##### data

`any`

#### Returns

[`AppsInfo`](AppsInfo.md)

[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageResourceIssueInfo

# Class: OnPageResourceIssueInfo

Defined in: main.ts:166811

resource errors and warnings

## Implements

- [`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageResourceIssueInfo()

> **new OnPageResourceIssueInfo**(`data`?): [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

Defined in: main.ts:166819

#### Parameters

##### data?

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md)

#### Returns

[`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

## Properties

### errors?

> `optional` **errors**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

Defined in: main.ts:166813

resource errors

#### Implementation of

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md).[`errors`](../interfaces/IOnPageResourceIssueInfo.md#errors)

***

### warnings?

> `optional` **warnings**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

Defined in: main.ts:166815

resource warnings

#### Implementation of

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md).[`warnings`](../interfaces/IOnPageResourceIssueInfo.md#warnings)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:166828

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:166854

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

Defined in: main.ts:166847

#### Parameters

##### data

`any`

#### Returns

[`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

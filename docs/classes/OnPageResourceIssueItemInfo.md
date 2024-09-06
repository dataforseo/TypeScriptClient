[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageResourceIssueItemInfo

# Class: OnPageResourceIssueItemInfo

## Implements

- [`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageResourceIssueItemInfo()

> **new OnPageResourceIssueItemInfo**(`data`?): [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Parameters

• **data?**: [`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md)

#### Returns

[`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Defined in

main.ts:154885

## Properties

### column?

> `optional` **column**: `number`

column where the error was found

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`column`](../interfaces/IOnPageResourceIssueItemInfo.md#column)

#### Defined in

main.ts:154867

***

### line?

> `optional` **line**: `number`

line where the error was found

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`line`](../interfaces/IOnPageResourceIssueItemInfo.md#line)

#### Defined in

main.ts:154865

***

### message?

> `optional` **message**: `string`

text message of the error
the full list of possible HTML errors can be found here

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`message`](../interfaces/IOnPageResourceIssueItemInfo.md#message)

#### Defined in

main.ts:154870

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the error
possible values:
0 — Unidentified Error;
501 — Html Parse Error;
1501 — JS Parse Error;
2501 — CSS Parse Error;
3501 — Image Parse Error;
3502 — Image Scale Is Zero;
3503 — Image Size Is Zero;
3504 — Image Format Invalid

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`status_code`](../interfaces/IOnPageResourceIssueItemInfo.md#status_code)

#### Defined in

main.ts:154881

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:154894

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:154914

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Defined in

main.ts:154907

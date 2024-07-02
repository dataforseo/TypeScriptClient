**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageResourceIssueItemInfo

# Class: OnPageResourceIssueItemInfo

## Implements

- [`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageResourceIssueItemInfo(data)

> **new OnPageResourceIssueItemInfo**(`data`?): [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Parameters

• **data?**: [`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md)

#### Returns

[`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Source

main.ts:153291

## Properties

### column?

> **`optional`** **column**: `number`

column where the error was found

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`column`](../interfaces/IOnPageResourceIssueItemInfo.md#column)

#### Source

main.ts:153273

***

### line?

> **`optional`** **line**: `number`

line where the error was found

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`line`](../interfaces/IOnPageResourceIssueItemInfo.md#line)

#### Source

main.ts:153271

***

### message?

> **`optional`** **message**: `string`

text message of the error
the full list of possible HTML errors can be found here

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`message`](../interfaces/IOnPageResourceIssueItemInfo.md#message)

#### Source

main.ts:153276

***

### status\_code?

> **`optional`** **status\_code**: `number`

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

#### Source

main.ts:153287

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:153300

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:153320

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Source

main.ts:153313

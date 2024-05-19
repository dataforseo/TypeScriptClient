**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageResourceIssueItemInfo

# Interface: IOnPageResourceIssueItemInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### column?

> **`optional`** **column**: `number`

column where the error was found

#### Source

main.ts:152027

***

### line?

> **`optional`** **line**: `number`

line where the error was found

#### Source

main.ts:152025

***

### message?

> **`optional`** **message**: `string`

text message of the error
the full list of possible HTML errors can be found here

#### Source

main.ts:152030

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

#### Source

main.ts:152041

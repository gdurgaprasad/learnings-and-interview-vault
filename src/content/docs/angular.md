---
title: "Angular Vault"
description: "All Angular questions, answers, and code snippets in one place."
---

### 1: What is the difference between Default and OnPush Change Detection?

<details>
<summary><strong>Click to reveal answer</strong></summary>

**Default** checks the entire component tree on every async event. **OnPush** checks only when an `@Input()` reference changes or an event originates from within the component.

```typescript
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<h1>{{ user.name }}</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user!: User;
}
```

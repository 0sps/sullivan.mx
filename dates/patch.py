import re

with open('/Users/sps/Documents/GitHub/sullivan.mx/dates/app.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update colors to Obsidian Journal theme
content = re.sub(r'--surface-1:.*?;', '--surface-1: rgba(10, 10, 12, 0.45);', content)
content = re.sub(r'--surface-2:.*?;', '--surface-2: rgba(20, 20, 24, 0.65);', content)
content = re.sub(r'--surface-3:.*?;', '--surface-3: rgba(30, 30, 36, 0.8);', content)
content = re.sub(r'radial-gradient\(circle at 10% 20%, rgba\(60, 10, 80, 0.8\).*?\);', 'radial-gradient(circle at 10% 20%, rgba(30, 10, 50, 0.6) 0%, transparent 50%),\n                radial-gradient(circle at 90% 80%, rgba(10, 20, 40, 0.6) 0%, transparent 50%),\n                radial-gradient(circle at 50% 50%, rgba(10, 10, 20, 0.8) 0%, transparent 80%);', content, flags=re.DOTALL)

with open('/Users/sps/Documents/GitHub/sullivan.mx/dates/app.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Patched colors.")

import collections,sys,threading
from collections import defaultdict, deque
sys.setrecursionlimit(10**6)
threading.stack_size(10**6)

def solve():
    
       def dfs(node, dq, m):
           dq.append(node)
           temp = dq[0]
           flag = 0
           if len(dq) > d + 1:
               flag = 1
               m[col[temp]] -= 1
               dq.popleft()
           
           vis[node] = 1
           global ans
           if m[col[node]] and m[col[node]] % 2 == 1:
               ans ^= val[node]
        
           m[col[node]] += 1
           for ch in adj[node]:
               if vis[ch]:
                   continue
               dfs(ch, dq, m)
        
           dq.pop()
           if flag:
               dq.appendleft(temp)
               m[col[temp]] += 1
       
       n, d = map(int, input().split())
       # print(n)
       # print(d)
       adj = collections.defaultdict(list)
       val = [0] * (n + 1)
       col = [0] * (n + 1)
       vis = [0] * (n + 1)
       # print(val)
    #    ans = 0

 
       for _ in range(n - 1):
           u, v = map(int, input().split())
       #     print(u)
           adj[u].append(v)
           adj[v].append(u)
        
       val[1:n+1] = map(int, input().split())
       col[1:n+1] = map(int, input().split())
    #    print(col)
        
       dq = deque()
       m = collections.defaultdict(int)
       dfs(1, dq, m)
       print(ans)
       for i in range(1, n + 1):
           ans ^= val[i]
        
       print(ans)

threading.Thread(target=solve).start()